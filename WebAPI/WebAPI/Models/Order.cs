using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName ="int")]
        public int CustomerId { get; set; }
        [Required]
        [Column(TypeName = "datetime")]
        public DateTime TimeStamp { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int PointsEarned { get; set; }
        [Required]
        [Column(TypeName = "decimal")]
        public decimal TotalPrice { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int TotalQuantity { get; set; }

    }
}
