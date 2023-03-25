const { Post } = require('../models');

const postData = [
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1
  },
  {
    title: 'Diam donec adipiscing',
    content: 'Tristique risus nec feugiat in fermentum. Et ligula ullamcorper malesuada proin libero nunc.',
    user_id: 2
  },
  {
    title: 'Gravida rutrum',
    content: 'quisque non tellus orci ac.',
    user_id: 1
  },
  {
    title: 'Pulvinar etiam',
    content: 'Non quam lacus suspendisse faucibus interdum posuere.',
    user_id: 4
  },
  {
    title: 'Aliquet eget sit amet tellus',
    content: 'Cras adipiscing enim eu turpis.',
    user_id: 3
  },
  {
    title: 'Condimentum lacinia quis vel eros donec ac',
    content: 'Amet nulla facilisi morbi tempus iaculis.',
    user_id: 4
  },
  {
    title: 'Leo vel fringilla',
    content: 'Est ullamcorper eget nulla facilisi etiam.',
    user_id: 2
  },
  {
    title: 'Odio ut sem nulla pharetra diam sit',
    content: 'Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.',
    user_id: 4
  },
  {
    title: 'Duis ac nibh.',
    content: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    user_id: 4
  },
  {
    title: 'Congue quisque',
    content: 'Egestas diam in arcu cursus euismod. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit.',
    user_id: 4
  },
  {
    title: 'Lorem dolor sed',
    content: 'Id diam maecenas ultricies mi eget mauris pharetra.',
    user_id: 3
  },
  {
    title: 'Amet facilisis magna etiam tempor',
    content: 'Amet nisl purus in mollis nunc sed id semper risus.',
    user_id: 1
  },
  {
    title: 'Pretium fusce id velit ut',
    content: 'In ante metus dictum at tempor commodo ullamcorper.',
    user_id: 3
  },
  {
    title: 'Dignissim sodales ut eu sem',
    content: 'Nisl nisi scelerisque eu ultrices vitae.',
    user_id: 3
  },
  {
    title: 'Nullam vehicula ipsum',
    content: 'In ante metus dictum at tempor commodo.',
    user_id: 3
  },
  {
    title: 'Risus quis varius quam',
    content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    user_id: 2
  },
  {
    title: 'Pharetra vel turpis nunc eget lorem',
    content: 'Nullam vehicula ipsum a arcu cursus vitae congue.',
    user_id: 2
  },
  {
    title: 'Laoreet non curabitur gravida arcu',
    content: 'Ante in nibh mauris cursus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere.',
    user_id: 4
  },
  {
    title: 'Quam vulputate dignissim suspendisse in est',
    content: 'Ut diam quam nulla porttitor massa id neque.',
    user_id: 1
  },
  {
    title: 'Suscipit adipiscing bibendum',
    content: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;