let msg = "";
city = input("what is the name your city?");


  if (city = ""):
    msg = "No city entered. Cannot determine delivery availability."
  else:
    switch(city){
      case(city = "Johnstown"):
          msg = "We can have items delivered to you in 3 days.";
      case(city = "Donville"):
          msg = "We can have items delivered to you in 1 week.";
      case((city = "Danieltown") || (city = "Martyville")):
          msg = "We can have items delivered to you in 2 weeks.";
      Default:
        msg = "Sorry! We do not deliver to your city yet.";


    }
