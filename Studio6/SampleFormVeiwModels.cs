﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIT5032_Week6.Models
{
    public class SampleFormVeiwModels
    {
    }

    public class FormOneViewModel
    { 
        [Required] //required field, validation
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}