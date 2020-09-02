import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { theme, Box, Image } from '../../../src';
import sampleImg from '../../imgs/img.png';
import userImg from '../../imgs/user.png';
import heartsTriangles from '../../imgs/hearts_triangles.png';

storiesOf('Image', module)
  .add('Default', () => <Image source={sampleImg} width="100%" />)
  .add('Avatar', () => <Image source={userImg} variant="avatar" />);
