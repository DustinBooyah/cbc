import { Button, Container, Text, Title } from '@mantine/core';
import classes from '../Callout/Callout.module.css';
import { Dots } from '../Callout/Dots';

export function AboutCallout() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>

        <Container p={0} size={600}>
          <Text size="xl" className={classes.description}><strong>Our goal is to provide accessible, evidence-based, and evidence-informed training on a variety of behavioral health topics specifically tailored for children, youth, young adults and their families.</strong></Text>
        </Container>

        {/* <div className={classes.controls}> */}
          {/* <Button className={classes.control} size="lg" variant="default" color="gray">
           Get In Touch
          </Button> */}
          {/* <Button 
          className={classes.control} 
          size="lg"
            component="a"
            href="/contact"
          >
           Get In Touch
          </Button> */}
        {/* </div> */}
      </div>
    </Container>
  );
}



