import React, { Component, Fragment } from 'react';

// Styles
import './style.scss';

// Components
import Header from '../Header';
import Post from '../Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 3,
        author: {
          profileImage: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4',
          name: 'Diego Fernandes',
        },
        timestamp: 'há 4 min',
        content:
          'Amet consectetur adipisicing elit. Eaque earum blanditiis qui quibusdam dolores quaerat rem accusantium aperiam libero. Unde asperiores repellendus dolor minima assumenda obcaecati natus iure atque enim.',
      },
      {
        id: 2,
        author: {
          profileImage: 'https://avatars2.githubusercontent.com/u/4248081?s=400&v=4',
          name: 'Filipe Deschamps',
        },
        timestamp: 'há 8 min',
        content:
          'Ducimus velit quasi quis delectus ipsam amet quod, ipsum similique a necessitatibus labore assumenda quo quas? Doloremque repellat esse alias praesentium dicta natus modi, accusantium, qui obcaecati mollitia ab molestias.',
      },
      {
        id: 1,
        author: {
          profileImage: 'https://avatars3.githubusercontent.com/u/6677405?s=400&v=4',
          name: 'João Vitor',
        },
        timestamp: 'há 10 min',
        content:
          'Hic, praesentium repudiandae debitis natus incidunt sint! Numquam nisi accusamus odio? Totam ipsum modi praesentium repellat. Vero dolore doloremque vitae distinctio assumenda non incidunt, expedita harum ratione consequuntur! Reiciendis, dolorum?',
      },
    ],
  };

  renderPosts = () => {
    const { posts } = this.state;

    const allPosts = posts.map(post => <Post postData={post} key={post.id} />);

    return <div className="posts-content">{allPosts}</div>;
  };

  render() {
    return (
      <Fragment>
        <Header title="Rocketbook" />
        {this.renderPosts()}
      </Fragment>
    );
  }
}
