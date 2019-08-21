using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class PointsContext : DbContext
    {
        public PointsContext (DbContextOptions<PointsContext> options)
            : base(options)
        {
        }

        public DbSet<WebAPI.Models.Point> Point { get; set; }
    }
}
