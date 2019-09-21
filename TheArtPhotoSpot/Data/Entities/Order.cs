﻿using System;
using System.Collections.Generic;

namespace TheArtPhotoSpot.Data.Entites
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<OrderItem> Items { get; set; }
    }
}
