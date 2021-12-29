import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { SupportMailDto } from './dto/support-mail.dto';
import { OrderMailDto } from './dto/order-mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('support')
  sendSupportMail(@Body() createMailDto: SupportMailDto) {
    return this.mailService.sendSupportMail(createMailDto);
  }

  @Post('order')
  sendOrderMail(@Body() createMailDto: OrderMailDto) {
    console.log(createMailDto);
    return this.mailService.sendOrderMail(createMailDto);
  }
}
