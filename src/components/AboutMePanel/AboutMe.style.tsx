import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const MeDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitlePanel = styled.div`
    display: flex;
    flex-direction: row;
`;

const TitleName = styled.h3`
    padding: 0px;
`;

const SubtitleProfession = styled.span`
    padding-left: 5px;
    margin 0;
    font-weight: bold;
`;

const Description = styled.p`
    text-align: center;
`;

export {
	TitlePanel,
	TitleName,
	SubtitleProfession,
	Description,
	Container,
	MeDescription,
};
