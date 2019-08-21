using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class OrderRequestParams
    {
        public int CustomerId { get; set; }

        public List<OrderItem> OrderItems { get; set; }
    }
}
