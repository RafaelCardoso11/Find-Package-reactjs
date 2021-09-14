import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import './styles.scss';

export const ScrollTop = (): JSX.Element => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const anchor = document.getElementById('back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div onClick={handleClick} role="presentation" className="contentToScroll">
      <Zoom in={trigger}>
        <Fab size="small" aria-label="scroll back to top" id="btnToScroll">
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </div>
  );
};
