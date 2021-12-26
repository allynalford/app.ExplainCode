import React, { Fragment, useState, useEffect } from 'react';
import {
  Pacman,
  TriangleSkewSpin,
  BallGridPulse,
  BallSpinFadeLoader,
  BallPulse,
  BallClipRotateMultiple,
  BallClipRotate,
  BallBeat,
} from 'react-pure-loaders';
export default function PureLoader(props) {
  const [sync, setSync] = useState(new Date());
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, [sync]);
  useEffect(() => {
    setSync(props.sync);
  }, [props.sync]);
  useEffect(() => {}, [loading]);
  useEffect(() => {
    setLoading(props.loading);
  }, [props.loading]);

  switch (props.loader) {
    case 'BallBeat':
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <BallBeat color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
    case 'TriangleSkewSpin':
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <TriangleSkewSpin color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
    case 'BallClipRotateMultiple':
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <BallClipRotateMultiple color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
    case 'BallClipRotate':
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <BallClipRotate color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
    case 'BallPulse':
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <BallPulse color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
    case 'BallGridPulse':
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <BallGridPulse color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
    case 'BallSpinFadeLoader':
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <BallSpinFadeLoader color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <div style={{ margin: 'auto', width: '50%' }}>
            <div style={{ margin: 'auto', width: '50%' }}>
              <Pacman color={'#1F3A93'} loading={loading} />
            </div>
          </div>
        </Fragment>
      );
  }
}
