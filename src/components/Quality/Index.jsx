import { Container, Typography } from "@mui/material";
import "./Index.scss";
import TextAndContent from "./TextAndContent";
import Quality from '../other/quality.jpg'
const index = () => {
  return (
    <div className="abt-pg">
      <div >
        <img className="img-quality" src={Quality} alt="img"/>
      </div>
    <Container
      maxWidth={"100%"}
      sx={{
        margin: "10px auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" margin={"30px auto"} className="heading-quality">
     Our Quality
      </Typography>
      <TextAndContent />
    </Container>
    
  </div>
  )
}

export default index