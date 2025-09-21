import { useTranslation } from "react-i18next";

import {
	AboutMeButtons,
	HeroContainer,
	CarouselContainer,
} from "./HeroPresentation.style";
import HeroImage from "./HeroImage/HeroImage";

const HeroPresentation = () => {
	const { t } = useTranslation();

	return (
		<>
			<CarouselContainer className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<div className="hero bg-base-200  w-full">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<HeroImage className="max-w-sm rounded-lg shadow-2xl" />
							<HeroContainer>
								<h1 className="text-5xl font-bold">{t("app.greeting")}</h1>
								<p className="py-6">{t("app.articles.description")}</p>
								<button className="btn btn-primary">
									{t("app.navbar.articles")}
								</button>
							</HeroContainer>
						</div>
					</div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<div className="hero bg-base-200 w-full">
						<div className="hero-content flex-col lg:flex-row">
							<HeroImage className="max-w-sm rounded-lg shadow-2xl" />
							<HeroContainer>
								<h1 className="text-5xl font-bold">{t("app.who.header")}</h1>
								<p className="py-6">{t("app.me.description")}</p>
								<AboutMeButtons>
									<button className="btn btn-primary">
										{t("app.navbar.me")}
									</button>
									<button className="btn btn-secondary">
										{t("app.navbar.contact")}
									</button>
								</AboutMeButtons>
							</HeroContainer>
						</div>
					</div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</CarouselContainer>
		</>
	);
};

export default HeroPresentation;
