import React from 'react';
import { Badge } from '@gluestack/ui-components';

export const MyBadgeExample = ({ props }: any) => {
  return (
    <Badge variant="solid" {...props}>
      <Badge.Icon>☞</Badge.Icon>
      Badge
      <Badge.Icon>☚</Badge.Icon>
    </Badge>
  );
};
