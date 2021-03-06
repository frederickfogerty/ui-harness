import R from 'ramda';
import React from 'react';
import Radium from 'radium';
import Immutable from 'immutable';
import { delay } from 'js-util';
import { css, PropTypes } from '../util';
import CropMarks from '../shared/CropMarks';
import api from '../../shared/api-internal';



/**
 * Loads and displays a component.
 */
class Component extends React.Component {
  static propTypes = {
    current: PropTypes.instanceOf(Immutable.Map).isRequired,
  };
  static defaultProps = {};


  size() {
    const { current } = this.props;
    const width = current.get('width');
    const height = current.get('height');
    return { width, height };
  }

  styles() {
    const { width, height } = this.size();
    return css({
      base: {
        position: 'relative',
        width,
        height,
      },
    });
  }


  handleLoaded(componentInstance) {
    // Store component instance on load.
    if (!R.isNil(componentInstance)) {
      api.component(componentInstance);
    }
  }


  render() {
    const styles = this.styles();
    const { current } = this.props;
    const { width, height } = this.size();

    let element;
    const type = current.get('componentType');
    if (type) {
      // Props.
      const props = current.get('componentProps') || {};
      props.ref = (c) => delay(() => this.handleLoaded(c));

      // Children.
      const children = current.get('componentChildren');
      if (R.is(Array, children)) {
        // Ensure all children in the array have keys.
        children.forEach((child, i) => {
          if (R.is(Object, child)) {
            child.key = R.isNil(child.key) ? i : child.key;
          }
        });
      }
      element = React.createElement(type, props, children);
    }

    const cropMarksSize = current.get('cropMarks')
        ? current.get('cropMarks.size')
        : 0;


    return (
      <CropMarks
        size={ cropMarksSize }
        offset={ current.get('cropMarks.offset') }
        display={ width === '100%' ? 'block' : 'inline-block' }
        width={ width }
        height={ height }>
        <div style={ styles.base }>{ element }</div>
      </CropMarks>
    );
  }
}


export default Radium(Component);
