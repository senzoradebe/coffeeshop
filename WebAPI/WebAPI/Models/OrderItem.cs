using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int CustomerId { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int OrderId { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int CoffeeId { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Quantity { get; set; }
        [Required]
        [Column(TypeName = "decimal")]
        public decimal Price { get; set; }
    }
}
