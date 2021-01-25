using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MeetMe.Areas.Admin.Models
{
    public class NewMeetingViewModel
    {
        [Required(ErrorMessage = "Give me that f*cking title mate.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Oh, do you really think that you can share this post without adding a description?")]
        public string Description { get; set; }

        public DateTime? MeetingTime { get; set; }

        public string Place { get; set; }

        public IFormFile Photo { get; set; }
    }
}
