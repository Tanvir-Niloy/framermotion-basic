import React from 'react'
import {motion} from "framer-motion";
import { Card } from 'react-bootstrap';
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: "Marketing site design & build",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Glide Utilities",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Noton High Street Product",
      imageUrl: project1,
    },
  ];
  return (
    <motion.div inital={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}}
    transition={{duration:0.5}}
    >
    <div className="services">
      <h2>Services</h2>
      <div className="wrapper">
        {servicesList.map((item)=>{
            return(
              <motion.div
              key={item.id} 
              whileHover={{
                scale:1.1,
                transition:{duration:0.5}
              }}
              >
                <Card>
                  <Card.Img variant="top" src={item.imageUrl}/>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            )  
        })}
      </div>
    </div>
    </motion.div>
  )
}

export default Services