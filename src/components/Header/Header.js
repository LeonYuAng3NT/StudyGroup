/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={style.root}>
        <div className={style.container}>
          <Navigation className={style.nav} />
          <Link className={style.brand} to="/">
            <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
            <span className={style.brandTxt}>Yu Ang Zhang</span>
          </Link>
          <div className={style.banner}>
            <h1 className={style.bannerTitle}>StudyGroup</h1>
            <p className={style.bannerDesc}>Help UofT students acheive better goals </p>
          </div>
        </div>
      </div>
    );
  }

}

export default withStyles(Header, style);
