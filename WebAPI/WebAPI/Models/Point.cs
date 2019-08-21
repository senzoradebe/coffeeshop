using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Point
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int CustomerId { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int CurrentBalance { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Redeemed { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int TotalEarned { get; set; }
    }
}
