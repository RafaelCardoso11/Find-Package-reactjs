import './styles.scss';
import { Box } from '@material-ui/core';

import DevicesIcon from '@material-ui/icons/Devices';
import TimerIcon from '@material-ui/icons/Timer';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { CardComponent } from './Card';
import { motion } from 'framer-motion';
import { translateYY50 } from '../../../animations';
import { useScroll } from '../../../Hooks/useScroll';

export const CardsHomeFind = (): JSX.Element => {
  const [element, controls] = useScroll();
  return (
    <Box className="cards-home" style={{ padding: '6px' }} id="cardsHomeFind">
      <motion.div
        ref={element}
        variants={translateYY50}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
      >
        <CardComponent
          icon={<DevicesIcon className="iconCard" />}
          title="Localização"
          description="Editing and customizing Essential Landing is easy and fast."
          cardDisplay="flex"
        />
      </motion.div>
      <motion.div
        ref={element}
        variants={translateYY50}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.2, type: 'spring', stiffness: 30 }}
      >
        <CardComponent
          icon={<TimerIcon className="iconCard" />}
          title="Tempo real"
          description="Editing and customizing Essential Landing is easy and fast."
          cardDisplay="flex"
        />
      </motion.div>
      <motion.div
        ref={element}
        variants={translateYY50}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.3, type: 'spring', stiffness: 20 }}
      >
        <CardComponent
          icon={<InsertEmoticonIcon className="iconCard" />}
          title="Fácil de utilizar"
          description="Editing and customizing Essential Landing is easy and fast."
          cardDisplay="flex"
        />
      </motion.div>
    </Box>
  );
};
