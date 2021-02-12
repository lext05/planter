import React, { Component } from 'react';
import Link from 'next/link'

class NavigationBar extends Component{
  render() {
    return (
      <div className="row">
        <Link href={"/"}>Home</Link>
        <Link href={`/plants`}>Plants</Link>
        <Link href={`/search`}>Search</Link>
      </div>
    );
  }
}

export default NavigationBar