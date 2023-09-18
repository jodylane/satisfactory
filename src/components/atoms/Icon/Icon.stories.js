import styled from 'styled-components';
import Icon, { ICON_CATEGORY_NAMES, ICON_NAMES, IconOptions, fixtures } from './index';
import { dynamicValueDescription } from '@utils/storybookUtils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Category = styled.p`
  border-bottom: 1px solid black;
  padding: 10px;
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  width: 200px;
`;

const Name = styled.div`
  margin-top: 10px;
`;

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    category: {
      options: ICON_CATEGORY_NAMES,
      control: { type: 'select' },
      description: dynamicValueDescription(
        'The name of the category for the group of Icons you wish to use.',
        ICON_CATEGORY_NAMES
      ),
    },
    name: {
      options: ICON_NAMES,
      control: { type: 'select' },
      description: dynamicValueDescription(
        `The name of the Icon you wish to use that belongs to a category. This field is also the default
        accessibility title for screen readers.`,
        ICON_NAMES
      ),
    },
    title: {
      control: 'text',
    },
  },
};

const categories = Object.entries(IconOptions);

const staticProps = { ...fixtures };

const Template = (args) => <Icon {...args} />;

const AllIconTemplate = (args) => {
  return (
    <Container>
      {categories.map(([category, object], index) => {
        const icons = Object.keys(object);

        return (
          <CategoryContainer key={`${category}${index}`}>
            <Category>{category}</Category>
            <Grid>
              {icons.map((icon, idx) => {
                return (
                  <IconContainer key={`${category}${index}${icon}${idx}`}>
                    <Icon {...args} name={icon} category={category} />
                    <Name>{icon}</Name>
                  </IconContainer>
                );
              })}
            </Grid>
          </CategoryContainer>
        );
      })}
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = { ...staticProps };

export const AllIcons = AllIconTemplate.bind({});
