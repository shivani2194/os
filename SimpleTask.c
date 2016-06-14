#include<stdio.h>
#include<stdint.h>
#include<string.h>
#include "stm32f3xx_hal.h"
#include "stm32f3_discovery.h"
#include "common.h"
static uint32_t counter;

void TaskCounter(void)
{
if (counterValue != 0)

{
printf("the value of counter is %u\n",(unsigned int) counter);
counter--;
}
}
void Count(int mode)
{	
       	uint32_t count;
       	if(count)
	{
		printf("Count value not found %u\n",(unsigned int)counterValue);
   		return;
 	}

	if(mode != CMD_INTERACTIVE) 
	{
	   return;
	}
 	count = fetch_uint32_arg(&counterValue);
	
	
	
}

 ADD_CMD("counter",Count,  "variable value will be decremented by 1 and count will share the same variable"); 	