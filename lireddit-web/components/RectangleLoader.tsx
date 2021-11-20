import { forwardRef, Box, BoxProps } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";

export const RectangleSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const RectangleContainer = forwardRef<BoxProps, "div">(
  ({ children }, ref) => (
    <Box
      ref={ref}
      className="voxel-dog"
      m="auto"
      mt={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <RectangleContainer>
      <RectangleSpinner />
    </RectangleContainer>
  );
};

export default Loader;
