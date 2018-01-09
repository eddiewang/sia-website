import * as React from 'react'
const Detector = require('./globe/third-party/Detector')
const TWEEN = require('./globe/third-party/Tween')
const DAT = require('./globe/globe')

import * as styles from './Globe.scss'

class Globe extends React.Component {
  public container
  constructor(props) {
    super(props)
  }

  public shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  public componentDidMount() {
    if(!Detector.webgl){
      Detector.addGetWebGLMessage();
    } else {

      const opts = {imgDir: 'assets/'};
      const globe = new DAT.Globe(this.container, opts);
      const tweens = [];

      let xhr;
      TWEEN.start();

      xhr = new XMLHttpRequest();
      xhr.open('GET', 'assets/population909500.json', true);
      const onreadystatechangecallback = (e) => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            // eslint-disable-next-line
            for (let i=0;i<data.length;i++) {
              globe.addData(data[i][1], {format: 'magnitude', name: data[i][0], animated: true});
            }
            globe.createPoints();
            globe.animate();
            document.body.style.backgroundImage = 'none'; // remove loading
          }
        }
      };
      xhr.onreadystatechange = onreadystatechangecallback.bind(this);
      xhr.send(null);
    }

  }

  public render() {
    return (
      <div>
        <div className={styles.Globe} ref={(container) => this.container = container } />
      </div>
    )
  }
}

export default Globe
