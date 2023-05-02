import { StContainer } from "../styles/Container.styles";
import AddSection from "../components/AddSection/AddSection";
import Feed from "../components/Feed/Feed";

function Feeds() {
  return (
    <div>
      <StContainer>
        <AddSection>- What Was Your Best Memento In Life?</AddSection>
      </StContainer>
      <StContainer
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="var(--font-regular)"
        fontWeight="var(--weight-semi-bold)"
        padding="20px"
        marginTop="20px"
      >
        Feed
      </StContainer>

      <Feed />
    </div>
  );
}

export default Feeds;
