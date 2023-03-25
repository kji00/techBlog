const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Labore et dolore magna aliqua',
    user_id: 3,
    post_id: 16
  },
  {
    comment: 'Tellus in metus vulputate eu scelerisque felis bibendum',
    user_id: 3,
    post_id: 8
  },
  {
    comment: 'Aliquam erat volutpat',
    user_id: 4,
    post_id: 10
  },
  {
    comment: 'Risus nec feugiat in fermentum posuere',
    user_id: 3,
    post_id: 8
  },
  {
    comment: 'Maecenas pulvinar lobortis est',
    user_id: 1,
    post_id: 20
  },
  {
    comment: 'Praesent blandit lacinia erat',
    user_id: 1,
    post_id: 3
  },
  {
    comment: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo',
    user_id: 2,
    post_id: 7
  },
  {
    comment: 'Sed vel enim sit amet nunc viverra',
    user_id: 1,
    post_id: 4
  },
  {
    comment: 'Integer tincidunt ante vel ipsum',
    user_id: 4,
    post_id: 10
  },
  {
    comment: 'Morbi a ipsum.',
    user_id: 2,
    post_id: 7
  },
  {
    comment: 'Dui faucibus in ornare quam viverra orci',
    user_id: 3,
    post_id: 14
  },
  {
    comment: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 2,
    post_id: 6
  },
  {
    comment: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 2,
    post_id: 9
  },
  {
    comment: 'Fusce congue, diam id ornare imperdiet',
    user_id: 4,
    post_id: 14
  },
  {
    comment: 'Sapien urna pretium nisl, ut volutpat sapien arcu sed augue',
    user_id: 3,
    post_id: 1
  },
  {
    comment: 'Nulla dapibus dolor vel est',
    user_id: 1,
    post_id: 9
  },
  {
    comment: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
    user_id: 2,
    post_id: 12
  },
  {
    comment: 'Nulla neque libero, ultricies eu, nibh',
    user_id: 4,
    post_id: 11
  },
  {
    comment: 'Quisque id justo sit amet sapien dignissim vestibulum',
    user_id: 3,
    post_id: 13
  },
  {
    comment: 'Donec ut mauris eget massa tempor convallis',
    user_id: 4,
    post_id: 11
  },
  {
    comment: 'Curabitur convallis.',
    user_id: 3,
    post_id: 4
  },
  {
    comment: 'Mus mauris vitae ultricies leo integer',
    user_id: 4,
    post_id: 10
  },
  {
    comment: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    post_id: 8
  },
  {
    comment: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 1,
    post_id: 8
  },
  {
    comment: 'Phasellus id sapien in sapien iaculis congue vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
  {
    comment: 'Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 4,
    post_id: 3
  },
  {
    comment: 'Lorem ipsum dolor sit amet',
    user_id: 1,
    post_id: 15
  },
  {
    comment: 'Pharetra diam sit amet nisl suscipit',
    user_id: 4,
    post_id: 16
  },
  {
    comment: 'Pulvinar etiam non quam',
    user_id: 4,
    post_id: 13
  },
  {
    comment: 'Proin eu mi. Vulputate eu scelerisque',
    user_id: 2,
    post_id: 10
  },
  {
    comment: 'Diam in arcu cursus',
    user_id: 2,
    post_id: 5
  },
  {
    comment: 'sed do eiusmod tempor incididunt ut labore',
    user_id: 2,
    post_id: 1
  },
  {
    comment: 'Donec quis orci eget orci vehicula condimentum',
    user_id: 3,
    post_id: 13
  },
  {
    comment: 'Quam elementum pulvinar etiam non quam lacus suspendisse',
    user_id: 1,
    post_id: 13
  },
  {
    comment: 'Viverra maecenas accumsan lacus vel facilisis volutpat est velit',
    user_id: 2,
    post_id: 14
  },
  {
    comment: 'Ut venenatis tellus in metus vulputate eu scelerisque felis',
    user_id: 3,
    post_id: 8
  },
  {
    comment: 'Urna id volutpat lacus laoreet non curabitur gravida',
    user_id: 4,
    post_id: 11
  },
  {
    comment: 'Etiam vel augue. Vestibulum rutrum rutrum neque',
    user_id: 2,
    post_id: 5
  },
  {
    comment: 'Etiam sit amet nisl purus. Nibh ipsum consequat nisl vel pretium',
    user_id: 4,
    post_id: 6
  },
  {
    comment: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat',
    user_id: 3,
    post_id: 8
  },
  {
    comment: 'Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin',
    user_id: 1,
    post_id: 14
  },
  {
    comment: 'Vitae tortor condimentum lacinia quis vel eros donec ac',
    user_id: 2,
    post_id: 11
  },
  {
    comment: 'At tellus at urna condimentum mattis pellentesque id nibh tortor',
    user_id: 4,
    post_id: 6
  },
  {
    comment: 'Eros in cursus turpis massa tincidunt dui',
    user_id: 3,
    post_id: 7
  },
  {
    comment: 'Metus dictum at tempor commodo ullamcorper a. Gravida quis blandit turpis cursus',
    user_id: 1,
    post_id: 9
  },
  {
    comment: 'Pellentesque ultrices mattis odio',
    user_id: 4,
    post_id: 4
  },
  {
    comment: 'Augue ut lectus arcu bibendum at varius vel pharetra vel',
    user_id: 2,
    post_id: 1
  },
  {
    comment: 'Tincidunt id aliquet risus feugiat in ante. Diam maecenas ultricies mi eget mauris',
    user_id: 2,
    post_id: 19
  },
  {
    comment: 'Nibh ipsum consequat nisl vel pretium',
    user_id: 4,
    post_id: 1
  },
  {
    comment: 'Lorem ipsum dolor sit amet',
    user_id: 1,
    post_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;