using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly OrderContext _context;

        public OrdersController(OrderContext context)
        {
            _context = context;
        }




        // PUT: api/Orders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymentDetail(int id, Order paymentDetail)
        {
            if(id!=paymentDetail.Id)
            {
                return BadRequest();
            }
            _context.Entry(paymentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetPaymentDetail(int id)
        {
            var paymentDetail = await _context.Orders.FindAsync(id);

            if (paymentDetail == null)
            {
                return NotFound();
            }

            return paymentDetail;
        }

        // POST: api/Orders
        [HttpPost]
        public async Task<ActionResult<Order>> PostPaymentDetail(OrderRequestParams basket)
        {
            //var totalNumberOfBuys = _context.OrderItems.Where(p => p.CustomerId == basket.CustomerId).Sum(c => c.Quantity);
            var counter = 0;
            var points = 0;
            var totalQuantity = 0;
            var totalPrice = 0m;

            var order = new Order();
            order.CustomerId = basket.CustomerId;
            order.PointsEarned = points;
            order.TotalPrice = totalPrice;
            order.TotalQuantity = totalQuantity;
            order.TimeStamp = DateTime.Now;
            _context.Orders.Add(order);


            foreach (var item in basket.OrderItems)
            {
                var orderItem = new OrderItem();
                orderItem.OrderId = item.OrderId;
                orderItem.CoffeeId = item.CoffeeId;
                orderItem.CustomerId = item.CustomerId;
                orderItem.Quantity = item.Quantity;
                orderItem.Price = item.Price;
                totalPrice = Convert.ToDecimal(totalPrice + Convert.ToDecimal(item.Price));
                totalQuantity += item.Quantity;
                _context.OrderItems.Add(orderItem);
                counter++;
                if (counter % 10 == 0)
                {
                    points++;
                }
            }



            await _context.SaveChangesAsync();
            return CreatedAtAction("GetPaymentDetail", new { id = order.Id }, order);
        }



        private bool PaymentDetailExists(int id)
        {
            return _context.Orders.Any(e => e.Id == id);
        }
    }
}
