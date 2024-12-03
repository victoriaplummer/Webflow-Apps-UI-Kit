import '../src/styles/variables.css';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import React from 'react';
import type { Preview } from '@storybook/react';
import { colors } from '../src/components/foundations';
import styled from 'styled-components';

const WEBFLOW_APP_SIZES = {
  default: {
    width: '240px',
    height: '360px',
  },
  comfortable: {
    width: '320px',
    height: '460px',
  },
  large: {
    width: '800px',
    height: '600px',
  },
} as const;

// Define the PopoverHeader styled component
const PopoverHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #1e1e1e;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 100%;
  height: 40px;
  background: #1e1e1e;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 272px;
  height: 24px;
  flex-grow: 1;
`;

const FormConnectorIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #f3c831;
  border-radius: 2px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 4.69%;
    right: 4.69%;
    top: 4.69%;
    bottom: 4.69%;
    background: #090b32;
  }
`;

const FormConnectorText = styled.div`
  width: 98px;
  height: 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12.5px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #f5f5f5;
`;

const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 4px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.13);
`;

const StoryWrapper = styled.div`
  color: ${colors.text.text1};
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
`;

const PopoverContent = styled.div<{ $hasHeader: boolean }>`
  height: ${(props) => (props.$hasHeader ? 'calc(100% - 41px)' : '100%')};
  overflow-y: auto;
  overflow-x: hidden;
`;

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const isExampleStory = context.parameters.fileName?.includes('src/stories/example');
      const appSize = context.parameters.appSize || 'comfortable';
      const { width, height } = WEBFLOW_APP_SIZES[appSize];

      return (
        <>
          <GlobalStyles />
          <StoryWrapper>
            {isExampleStory ? (
              <PopoverHeader>
                <Frame>
                  <Heading>
                    <FormConnectorIcon />
                    <FormConnectorText>Form Connector</FormConnectorText>
                  </Heading>
                  <IconButton>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M12 4L4 12M4 4L12 12"
                        stroke="#BDBDBD"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Frame>
                <Divider />
                <PopoverContent $hasHeader={true}>
                  <Story />
                </PopoverContent>
              </PopoverHeader>
            ) : (
              <PopoverContent $hasHeader={false}>
                <Story />
              </PopoverContent>
            )}
          </StoryWrapper>
        </>
      );
    },
  ],
  parameters: {
    // Default app size
    appSize: 'comfortable',

    // Configure viewport addon
    viewport: {
      viewports: {
        webflowDefault: {
          name: 'Webflow Default',
          styles: {
            width: '240px',
            height: '360px',
          },
        },
        webflowComfortable: {
          name: 'Webflow Comfortable',
          styles: {
            width: '320px',
            height: '460px',
          },
        },
        webflowLarge: {
          name: 'Webflow Large',
          styles: {
            width: '800px',
            height: '600px',
          },
        },
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1E1E1E',
        },
      ],
    },
  },
};

export default preview;
