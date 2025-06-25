import { Button, Container, Text, Title } from '@mantine/core';
import classes from '../../Callout/Callout.module.css';
import { Dots } from '../../Callout/Dots';

export function TrainingsCallout() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      {/* <Dots className={classes.dots} style={{ left: 0, top: 140 }} /> */}
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>

        <Container p={0} size={600}>
          <Text size="xl" className={classes.description}><strong>It&apos;s not about checking boxes - it&apos;s about building your capacity, staying connected, and doing work that matters.</strong></Text>
        </Container>
      </div>
    </Container>
  );
}



