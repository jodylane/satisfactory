import styled from 'styled-components';
import Icon from './index';
import Icons from './options';
// import { dynamicValueDescription } from '@utils/storybookUtils';

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
    name: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
  },
};

const categories = Object.entries(Icons);

const staticProps = {
  onClick: () => {
    alert('hey, nice click bro!');
  },
};

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
Default.args = { ...staticProps, name: 'Close', category: 'Interface' };

export const AllIcons = AllIconTemplate.bind({});
AllIcons.args = { ...staticProps };
