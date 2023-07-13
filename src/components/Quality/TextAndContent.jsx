import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import './Index.scss'
function TextAndContent() {
 
  return (
    <div>
      <Box
        maxWidth={"xl"}
        alignSelf="center"
        style={{
          margin: "20px auto",
        }}
      >
       <Grid container  marginBottom={"20px"}  padding={"20px"}>
                <Grid item  md={12} lg={12}>
                  <Typography align="justify" fontSize={"19px"} >
                  <span className="text-quality-parghrap">If the project is deemed viable and mutually beneficial, we proceed with a comprehensive survey of the land using advanced and cutting-edge equipment. Additionally, soil testing is conducted to ensure proper understanding of the terrain and inform the planning process. Simultaneously, the project is submitted to Kunwar Developers' planning department for meticulous and efficient town planning, while the legal department handles all the necessary paperwork and obtains government approvals to ensure compliance with regulations.

Once the planning and approval stages are successfully completed, the development phase commences immediately. The plots are allocated and possession is granted to you, the landowner, in an organized manner, typically in blocks or sections.

<br/>At Kunwar Developers, we prioritize customer satisfaction and financial transparency. Therefore, we adopt a payment structure where we receive compensation only upon successful delivery of the project. This approach ensures that both parties are confident and protected throughout the process.

By following this structured and systematic approach, Kunwar Developers strives to provide a seamless experience for landowners looking to transform their land into thriving housing projects, fostering trust and satisfaction among our valued clients.
At Kunwar Developers, we understand the importance of using high-quality materials in construction and development projects. As specialists in planning, engineering, and development, we are meticulous in our procurement process.

<br/>When it comes to materials such as steel, cement, paints, electrical cables, street lights, underground sewer lines, and water supply HDPE pipes, we rely on top-rated brands known for their quality and reliability. These brands include Newage cables, Askari Cement, Philips, Dadex, and Envecrete. We prioritize sourcing from trusted suppliers to ensure the durability and longevity of our projects.

To maintain strict quality control, we operate our own state-of-the-art concrete plant specifically designed for sewer lines and construction blocks. Each consignment of materials undergoes thorough testing before unloading. We also encourage clients to inspect the materials, promoting transparency and ensuring their satisfaction.

Our dedicated quality assurance department is always vigilant. They conduct regular checks and inspections at every stage of the project, leaving no corner unchecked. We take full responsibility for the materials we use and ensure that only approved and high-quality components are utilized.

By adhering to rigorous quality assurance measures and utilizing top-rated brands, Kunwar Developers ensures that every aspect of the project meets the highest standards. We are committed to delivering projects that not only meet your expectations but also stand the test of time.
</span>
                  </Typography>
                </Grid>
                
              </Grid>
      </Box>
    </div>
  );
}

export default TextAndContent;
