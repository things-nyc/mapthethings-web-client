import React from 'react';
import classNames from 'classnames';

// import { List } from '../components/list';

const divClasses = classNames('container-home');

export const Home = () => (
  <div className={ divClasses }>
    <h2>Project Information</h2>
    <p>Creating a global coverage map for <a href="http://thethingsnetwork.org/">The Things Network</a></p>
    <h2>Collecting Data</h2>
    <p>We want your data in whatever way it is available.
      We'll build out different ways to submit as we go.</p>
    <h3>1. Upload Existing Data</h3>
      <p>Many of you may already have recordings of successful transmissions
        paired with GPS data.</p>
      <p>Or submit a pull request with your
      data in a reasonable format (CSV, JSON, XML, YAML, EDN) in the Github
      <a href="https://github.com/things-nyc/mapthethings-server/tree/master/data">project/data</a>
      directory.</p>
      <p>Make certain to include GPS coordinates, RSSI and SNR values
      for successful TTN messages.</p>
      <p>Let me know if your data includes attempted
      transmissions that failed - we're interested in that data to show packet loss.</p>
    <h3>2. GPS Nodes</h3>
      <p>You are welcome to create your own nodes and use them to
      transmit GPS coordinates to the Map The Things server.</p>
      <ul>
        <li>AppSKey:&nbsp;<code>430D53B272A647AF5DFF6A167AB79A20</code></li>
        <li>NwkSKey:&nbsp;<code>804243642C1E3B04366D36C3909FCAA2</code></li>
        <li>Data:&nbsp;Send text strings (UTF-8 encoded bytes) in the form
          <code> &#123;"lat":40.7128,"lng":-74.0059&#125;</code> or just
          <code>40.7128,-74.0059</code></li>
      </ul>
    <h3>3. Map The Things - App &amp; Node</h3>
      <p>This option is not available because I have not yet written the app or built the node.</p>
      <p>Use the Map The Things
      <a href="http://github.com/things-nyc/mapthethings-ios">iOS app</a> and
      <a href="http://github.com/things-nyc/mapthethings-node">hardware node</a>
      to submit coverage samples.</p>
      <p>You start the node and start the app and then
        move around the coverage area, either as part of a specific data gathering
        mission or just a normal day's wandering. The app will report all attempts
        to send a message (via the API) as well successful transmissions via TTN.
        The resulting data will enable us to distinguishing between
        untested areas and those that have been tested and found wanting.</p>
    <br />
    Copyright &copy; The Things Network New York 2016
  </div>
);

