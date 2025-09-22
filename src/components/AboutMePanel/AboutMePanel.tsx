import { useTranslation } from "react-i18next";

import {
	Container,
	TitleName,
	MeDescription,
	SubtitleProfession,
	TitlePanel,
	Description,
} from "./AboutMe.style";

const AboutMePanel = () => {
	const { t } = useTranslation();

	return (
		<div className="card bg-base-100 card-md shadow-sm ">
			<div className="card-body">
				<h2 className="card-title">{t("aboutMePanel.title")}</h2>
				<Container>
					<TitlePanel>
						<div className="avatar">
							<div className="w-24 rounded">
								<img src="/images/avatar.png" />
							</div>
						</div>
						<MeDescription>
							<TitleName>Daissi Gonzalez</TitleName>
							<SubtitleProfession>
								{t("aboutMePanel.profession")}
							</SubtitleProfession>
						</MeDescription>
					</TitlePanel>
					<Description>{t("aboutMePanel.description")}</Description>
				</Container>
			</div>
		</div>
	);
};

export default AboutMePanel;
