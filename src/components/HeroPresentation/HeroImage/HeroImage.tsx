import React from "react";
import { Square, Container, PngOverlay } from "./HeroImage.style";

const getRandomColor = () => {
	let hue: number;
	const randomChoice = Math.random();

	if (randomChoice < 0.25) {
		hue = Math.random() * 15;
	} else if (randomChoice < 0.5) {
		hue = Math.random() * 60 + 90;
	} else if (randomChoice < 0.75) {
		hue = Math.random() * 60 + 180;
	} else {
		hue = Math.random() * 60 + 270;
	}

	return `hsla(${hue}, 80%, 75%, ${0.4 + Math.random() * 0.3})`;
};

const generateClusteredBubbles = (
	count: number,
	minSize: number = 40,
	maxSize: number = 90,
	containerWidth: number = 400,
	containerHeight: number = 400,
) => {
	if (count <= 0) return [];

	const bubbles = [];
	const bigBubblesCount = 2;
	const maxBigBubbleSize = maxSize * 1.5;

	const firstSize = minSize + Math.random() * (maxSize - minSize);
	const firstRadius = firstSize / 2;
	const firstLeft = firstRadius + Math.random() * (containerWidth - firstSize);
	const firstTop = firstRadius + Math.random() * (containerHeight - firstSize);

	const firstBubble = {
		id: 0,
		$color: getRandomColor(),
		$size: firstSize,
		top: firstTop,
		left: firstLeft,
		radius: firstRadius,
		centerX: firstLeft + firstRadius,
		centerY: firstTop + firstRadius,
		zIndex: 1,
	};

	bubbles.push(firstBubble);

	let bigBubbleCreated = 0;
	for (let i = 1; i < count; i++) {
		const isBigBubble = bigBubbleCreated < bigBubblesCount;
		const size = isBigBubble
			? maxBigBubbleSize
			: minSize + Math.random() * (maxSize - minSize);
		const radius = size / 2;

		let left, top;
		let newCenterX, newCenterY;
		let overlap = true;
		let attempts = 0;

		while (overlap && attempts < 100) {
			const targetBubble = bubbles[Math.floor(Math.random() * bubbles.length)];
			const { centerX, centerY, radius: targetRadius } = targetBubble;

			const minDistance = targetRadius + radius;

			const angle = Math.random() * Math.PI * 2;

			newCenterX = centerX + Math.cos(angle) * minDistance;
			newCenterY = centerY + Math.sin(angle) * minDistance;

			newCenterX = Math.max(
				radius,
				Math.min(containerWidth - radius, newCenterX),
			);
			newCenterY = Math.max(
				radius,
				Math.min(containerHeight - radius, newCenterY),
			);

			left = newCenterX - radius;
			top = newCenterY - radius;

			overlap = false;
			for (let j = 0; j < bubbles.length; j++) {
				const existingBubble = bubbles[j];
				const dx = existingBubble.centerX - newCenterX;
				const dy = existingBubble.centerY - newCenterY;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < targetRadius + radius) {
					overlap = true;
					break;
				}
			}

			attempts++;
		}

		if (!overlap) {
			bubbles.push({
				id: i,
				$color: getRandomColor(),
				$size: size,
				top,
				left,
				radius,
				centerX: newCenterX,
				centerY: newCenterY,
				zIndex: 1,
			});

			if (isBigBubble) {
				bigBubbleCreated++;
			}
		} else {
			console.warn("Invalid Square position");
		}
	}

	bubbles.sort((a, b) => a.$size - b.$size);
	bubbles.forEach((bubble, index) => {
		bubble.zIndex = bubbles.length - index;
	});

	return bubbles;
};

const HeroImage: React.FC = () => {
	const bubbles = generateClusteredBubbles(20, 30, 80, 400, 400);

	return (
		<Container>
			{bubbles.map((bubble) => (
				<Square
					key={bubble.id}
					$color={bubble.$color}
					$size={bubble.$size}
					top={bubble.top}
					left={bubble.left}
					zIndex={bubble.zIndex}
				/>
			))}

			<PngOverlay src="/images/hero.png" alt="Imagen PNG superpuesta" />
		</Container>
	);
};

export default HeroImage;
