import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

class App extends Component {
  state = {
    Posts: [
      {
        id: 1,
        avatar: 'generic-head.jpg',
        name: 'Dirceu Franco',
        time: '10 min',
        post:
          ' fringilla accumsan. Quisque dignissim quam id tellus rutrum, utconsequat lacus feugiat. In sagittis pulvinar velit quis volutpat. Suspendisse tristique sodales urna, in faucibus nisi facilisis ut. Inlaoreet dui id odio gravida, eget pellentesque tellus tincidunt. Fusce et nunc vel nisi porta rutrum. Aenean eget erat venenatis, vestibulum felis pulvinar, cursus sapien. Proin congue felis vel hendrerit bibendum.',
      },
      {
        id: 2,
        avatar: 'generic-head.jpg',
        name: 'Kelly Yukiko Horie',
        time: '30 min',
        post:
          ' liquam erat volutpat. Praesent sit amet odio tempor, tincidunt nisiet, tristique libero. Fusce accumsan nec arcu tincidunt varius. Praesent quis tempus lacus. Vivamus porta sem non quam hendrerit, bibendum dictum sem rutrum. Vestibulum vel nibh sed mi vehicula scelerisque mattis imperdiet orci. Donec pretium euismod tempus.',
      },
      {
        id: 3,
        avatar: 'generic-head.jpg',
        name: 'Akemi Horie Carvalho',
        time: '5 min',
        post:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut odio et enim luctus cursus vel non nisl. Phasellus nec augue tempus,feugiat sem vel, placerat sapien. Etiam tincidunt porttitor libero vitae finibus. Etiam sollicitudin velit nisi, id venenatis mauris eleifend in. Sed malesuada lacinia rhoncus. Suspendisse potenti. Donec convallis, ligula in efficitur suscipit, tortor erat dictum risus, eget sagittis erat tortor eget dolor. Praesent urna augue, imperdiet laoreet felis varius, mattis tempor erat. Aenean arcu elit, blandit id odio vel, interdum iaculis turpis. Nullam sollicitudin massa ante, id gravida libero blandit in. Integer volutpat lectus eget velit dignissim, laoreet consequat urna finibus.',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.Posts.map(post => (
          <Post key={post.id} posts={post} />
        ))}
      </Fragment>
    );
  }
}

export default App;
