# # returns a reverse tuple of remainder and quotient
# def uint2lmsb(i):    
#     return divmod(i, 256)[::-1]
    
# # returns two integers lsb and modified msb 
# def int2lmsb(i):
#     lsb, msb = divmod(i, 256)[::-1]
#     return lsb, (msb + 256) % 256

# def p2dDriveTo(x, v):
#     lsb_x, msb_x = int2lmsb(int(1000.0*x))           # [255,230]  #[225,200]
#     lsb_v, msb_v = uint2lmsb(int(1000.0*abs(v)))
#     return [lsb_x, msb_x, lsb_v, msb_v]

# print(p2dDriveTo(225, 200))
# print(p2dDriveTo(230, 220))


def getFrameData(self):
        result = [int(x) for x in self.get()[2:-1]]        
        return result