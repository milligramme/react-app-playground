import { useCallback, useState } from "react";

import { Box, Typography, Slider } from "@material-ui/core";

import MainTmpl from "components/templates/MainTmpl";

const About: React.FunctionComponent = () => {
  const [slice, setSlice] = useState(500);
  const handleTextLengthChange = useCallback((_e, value) => {
    setSlice(Number(value));
  }, []);

  const marks = [
    {
      value: 0,
      label: "🦜"
    },
    {
      value: 120,
      label: "🐈"
    },
    {
      value: 300,
      label: "🎂"
    },
    {
      value: 1200,
      label: "🤡"
    }
  ];

  return (
    <MainTmpl>
      <Box>
        <Slider
          marks={marks}
          min={0}
          max={1200}
          value={slice}
          valueLabelDisplay="on"
          onChange={handleTextLengthChange}
        />
        <Typography variant="h6">About</Typography>

        <Typography paragraph={true}>
          {`🦜 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum
          blandit mi sed placerat. Aenean 🐈 interdum sed quam eu vehicula. Vivamus
          dictum non est in rutrum. Aliquam non urna purus. Sed euismod, lacus
          sed aliquam sodales, dolor ex dapibus nunc, in sodales tortor libero et nibh.
         🎂 Quisque sollicitudin ultricies tellus, eget ultricies risus
          mattis eu. Cras sed nunc feugiat, pulvinar mauris et, cursus libero.
          Sed augue ligula, congue ac facilisis vitae, iaculis in elit. Sed
          bibendum sed ligula sit amet gravida. Nullam hendrerit nisl sit amet
          rhoncus volutpat. Nam rhoncus et leo non tincidunt. Sed viverra
          gravida lorem id dapibus. Praesent diam odio, dictum non sem eget,
          varius scelerisque eros. Proin vehicula pellentesque hendrerit. Nunc
          id placerat ligula. Nunc finibus, magna non accumsan tincidunt, libero
          sapien ultrices ex, non hendrerit leo tortor id libero. Fusce vehicula
          laoreet tristique. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. 🤡 ...`.slice(0, slice)}
        </Typography>
        <Typography paragraph={true}>
          Fusce non hendrerit risus, at ornare nisl. Fusce velit orci, efficitur
          et rutrum id, lacinia eget velit. Etiam facilisis urna eu ex
          convallis, eu ornare lacus convallis. Maecenas scelerisque, leo vitae
          accumsan sagittis, arcu nisl pellentesque leo, sed imperdiet diam nisi
          in lorem. Morbi mollis lacus quis convallis congue. Vivamus eget nisi
          vulputate, viverra mi non, fringilla sapien. Praesent tincidunt erat
          ut tristique pharetra. Nunc pellentesque magna augue, a maximus metus
          hendrerit sit amet. Nullam sollicitudin, massa a efficitur porttitor,
          magna enim tincidunt lacus, ac iaculis dolor risus et nibh. Phasellus
          eget elementum tortor, eget fermentum neque. Sed fringilla, dui id
          porttitor dignissim, augue ante facilisis mi, ac dapibus risus risus
          porta nunc. Duis venenatis pharetra velit nec scelerisque. Nam porta
          neque ac elit sollicitudin, eu commodo urna laoreet. Mauris
          scelerisque, mauris id fermentum maximus, velit justo tempor ex, a
          suscipit risus sapien eget velit. Praesent vel nibh malesuada,
          tristique nisi sed, tempus lorem.
        </Typography>
        <Typography paragraph={true}>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris
          nec ex diam. Ut lectus sapien, tempus sed lacus quis, molestie aliquet
          orci. In mattis eleifend diam, at placerat urna posuere at. Phasellus
          a sem venenatis, scelerisque purus nec, iaculis nulla. Praesent
          iaculis nec orci id fermentum. Nullam ut risus lorem. Aliquam at dolor
          sagittis, vulputate justo non, viverra risus. Morbi vel arcu cursus,
          viverra mi eu, tempor est. Nam metus felis, fringilla ac gravida et,
          ultrices non metus. Pellentesque ut leo non ante feugiat aliquet a sed
          velit. Suspendisse eu gravida ante. In orci eros, sodales eu nibh sed,
          fringilla dapibus justo. Pellentesque ut tellus erat. Quisque vitae
          neque nec nunc iaculis sollicitudin pretium vitae dolor. In hac
          habitasse platea dictumst. Quisque gravida congue erat, id pretium
          purus sodales quis. In aliquam ornare nunc ac sollicitudin. Aliquam
          dignissim fermentum justo. Etiam facilisis, urna sed pulvinar
          condimentum, eros turpis vestibulum eros, ut pulvinar mi mauris et
          risus. Donec congue ipsum sed risus tempus, vitae sollicitudin diam
          auctor. Nam pharetra justo facilisis ullamcorper convallis. Sed ligula
          justo, viverra quis libero eu, pulvinar consequat odio.
        </Typography>
      </Box>
    </MainTmpl>
  );
};

export default About;
