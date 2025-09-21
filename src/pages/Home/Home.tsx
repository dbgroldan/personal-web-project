import HeroPresentation from "../../components/HeroPresentation/HeroPresentation";
import CategoriesSelector from "../../components/CategoriesSelector/CategoriesSelector";
import AboutMePanel from "../../components/AboutMePanel/AboutMePanel";
import TagsPanel from "../../components/TagsPanel/TagsPanel";
import ArticlesPanel from "../../components/ArticlesPanel/ArticlesPanel";
import { Container, PageContent, SidePanel } from "./Home.style";

const Home = () => {
	return (
		<>
			<HeroPresentation />
			<Container>
				<CategoriesSelector />
				<PageContent>
					<SidePanel>
						<AboutMePanel />
						<TagsPanel />
					</SidePanel>
					<ArticlesPanel />
				</PageContent>
			</Container>
		</>
	);
};

export default Home;
