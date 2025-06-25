import { Button, Container, Text, Title } from '@mantine/core';
import classes from '../../Callout/Callout.module.css';
import { Dots } from '../../Callout/Dots';

export function ContactCTA() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Contact Our Team 
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" className={classes.description}>Have questions about training programs? We&apos;re here to help.</Text>
        </Container>

        <div className={classes.controls}>
          {/* <Button className={classes.control} size="lg" variant="default" color="gray">
           Get In Touch
          </Button> */}
          <Button 
          className={classes.control} 
          size="lg"
            component="a"
            href="/contact"
          >
           Get In Touch
          </Button>
        </div>
      </div>
    </Container>
  );
}



