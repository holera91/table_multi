import { ViewStyle, TextStyle } from 'react-native';

const WEB_CONTAINER_WIDTH = 414;
const WEB_CONTAINER_HEIGHT = 896;

export const CommonStyles = {
  webWrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,
  
  container: {
    width: WEB_CONTAINER_WIDTH,
    height: WEB_CONTAINER_HEIGHT,
    padding: 7,
    overflow: 'hidden' as const,
    position: 'relative' as const,
    border: '1px solid #ddd',
    borderRadius: 40,
    backgroundColor: '#90EE90',
    marginTop: 0,
  } as ViewStyle,
  
  header: {
    flexDirection: 'row' as const,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    position: 'relative',
  } as ViewStyle,

  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FFD700',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  } as ViewStyle,

  headerTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  } as TextStyle,
}; 