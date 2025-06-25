import { Button, Container, Text, Title } from '@mantine/core';
import classes from '../../Callout/Callout.module.css';
import { Dots } from '../../Callout/Dots';

export function MichicansCallout() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>

        <Container p={0} size={600}>
          <Text size="xl" className={classes.description}><strong>Please note: All MichiCANS certification exams, initial and annual, will continue to be accessed and taken via the TCOM training platform at <a href="http://www.tcomtraining.com">www.tcomtraining.com</a>. Support related to accessing certification exams can be found at <a href="mailto:support@tcomtraining.com">support@tcomtraining.com</a></strong></Text>
        </Container>
      </div>
    </Container>
  );
}



