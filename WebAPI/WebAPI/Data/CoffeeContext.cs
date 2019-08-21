using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class CoffeeContext : DbContext
    {
        public CoffeeContext (DbContextOptions<CoffeeContext> options)
            : base(options)
        {
        }

        public DbSet<Coffee> Coffees { get; set; }
    }
}
