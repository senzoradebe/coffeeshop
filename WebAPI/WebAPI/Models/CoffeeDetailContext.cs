﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class CoffeeDetailContext : DbContext
    {
        public CoffeeDetailContext(DbContextOptions<CoffeeDetailContext> options) : base(options)
        {

        }

        public DbSet<Coffee> Coffees { get; set; }
    }
}
