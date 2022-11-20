import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtoProps {
  children: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

export function Button({ children, disabled, loading, onPress }: ButtoProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#fff">{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color="#fff" />
      )}
    </Container>
  );
}
