import styled from 'styled-components/native';
import logo from '../../assets/images/logo.svg';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #191920;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  background: #191920;
  justify-content: space-between;
  padding: 40px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  background: #7159c1;
  position: absolute;
  right: -8px;
  top: -10px;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;
