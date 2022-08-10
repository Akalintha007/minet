import {
  TextField,
  styled,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  
} from "@mui/material";
import  { useState } from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import "./App.css";

const MainContainer = styled("div")({
  width: "100vh",
  alignItems: "center",
  justifyContent: "center",
});

const GridContainer = styled(Grid)({
  marginTop: "10vh",
  marginLeft: "25vw",
});

const IconGrid = styled(Grid)({
 marginTop:'25px',
 marginLeft:'20px',
});

const AgeGrid = styled(Grid)({
 alignItems:'center',
 justifyContent:'center'
 });

 const DisplayImage = styled('img')({
  alignItem:'center',
  marginLeft:'38vw'
  
  });

function App() {
  const [nameValue, setNameValue] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [url, setUrl] = useState("");
  const [age, setAge] = useState<number>(0);
  const [isAge, setIsAge]= useState(false)

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isNone, setIsNone] = useState(true);

  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
    displayImages()
    if (gender === "none") {
      setIsNone(true);
      setIsMale(false);
      setIsFemale(false);
    } else if (gender === "male") {
      setIsNone(false);
      setIsMale(true);
      setIsFemale(false);
    } else if (gender === "female"){
      setIsNone(false);
      setIsMale(false);
      setIsFemale(true);
    }
    else{
      setIsNone(false);
      setIsMale(false);
      setIsFemale(false);
    }
  };

  const displayImages =()=>{
    if(isMale){
      if(age<=18){
        setUrl("assets/m-teen.png")
      }
      else if(age >=19 && age<=55){
        setUrl("assets/m-adult.png")
      }
      else{
        setUrl("assets/m-old.png")
      }

    }
    else if (isFemale){

      if(age<=18){
        setUrl("assets/f-teen.png")
      }
      else if(age >=19 && age<=55){
        setUrl("assets/f-adult.png")
      }
      else{
        setUrl("assets/f-old.png")
      }
    }
    else{
      setUrl("")
    }
  }

  const handleAge = (event: any) => {
    setAge(event.target.value);
    setIsAge(true);
    displayImages()
  };

  const handleRender = (event: any) => {
    setName(event.target.value);
    setNameValue(true);
    console.log(name);
  };


  return (
    <div data-testid="App1" className="App">
      <MainContainer>
        <GridContainer container direction={"column"} spacing={4}>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Name"
              onChange={handleRender}
            />
          </Grid>
          {nameValue ? (
            <>
              <Grid item>
                <TextField
                  required
                  id="outlined-required"
                  label="Age"
                  type="number"
                  onChange={handleAge}
                />
              </Grid>
              <Grid item>
                <AgeGrid container direction="row" spacing={2}>
                  <Grid item>
                    <InputLabel id="demo-simple-select-helper-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={gender}
                      label="Gender"
                      onChange={handleChange}
                    >
                      <MenuItem value={"none"}>None</MenuItem>
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </Grid>
                  
                  {!isNone ? (
                    isMale ? (
                      <IconGrid item>
                        <MaleIcon/>
                      </IconGrid>
                    ) : (
                      <IconGrid item>
                        <FemaleIcon />
                      </IconGrid>
                    )
                  ) : (
                    ""
                  )}
                </AgeGrid>
              </Grid>
            </>
          ) : (
            ""
          )}
          <Grid item></Grid>
        </GridContainer>
        <Grid container>
            {
              isAge?
              (
                <DisplayImage src={url}/>
              )
              :
              (
                ""
              )
            }
        </Grid>
      </MainContainer>
    </div>
  );
}



