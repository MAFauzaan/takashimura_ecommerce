import React from 'react';
import { Button, styled } from '@mui/material';

export const LogOutButton = styled(Button)({
    fontSize: 14,
    fontWeight: 500,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    color: '#343A40',
    borderColor: '#343A40',
    borderRadius: 0,
    // '&:hover': {
    //     borderColor: '#DB7C92',
    //     backgroundColor
    // }
})

export const StatusButton = styled(Button)({
    width: '120px',
    borderRadius: 0,
    border: '1px solid #BD0029',
    fontSize: 14,
    fontWeight: 500,
    backgroundColor: '#BD0029',
    color: '#ffff',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
})

export const ReviewButton = styled(Button)({
    width: '120px',
    borderRadius: 0,
    border: '1px solid #001219',
    fontSize: 14,
    fontWeight: 500,
    backgroundColor: '#ffff',
    color: '#001219',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
})