import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SkillCard = ({ skill, skills }) => {
  return (
    <Card sx={{ width: 200, margin: 2 }}>
      <Typography
        variant="h6"
        sx={{  fontWeight: 600, mx: 2 }}
      >
        {skill}
      </Typography>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"center",
          alignItems: "flex-start",
        }}
      >
        {skills.map((singleSkill, index) => (
          <Box
            key={index}
            sx={{
              fontSize: 14,
              border: "1px solid dark",
              p: 0.5,
              mb: index === skills.length - 1 ? 0 : 1,
            }}
          >
            {singleSkill}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillCard;
