import { Injectable } from '@nestjs/common';
import { SupportMailDto } from './dto/support-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { supportMail } from './templates/support';
import { OrderMailDto } from './dto/order-mail.dto';
import { orderMail } from './templates/order';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  sendSupportMail(dto: SupportMailDto) {
    this.mailerService
      .sendMail({
        to: 'ПЧШ <krauchukvlad@gmail.com>',
        from: dto.email,
        subject: 'Письмо в поддержку',
        text: dto.text,
        html: supportMail(dto),
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        throw Error('Письмо не отправлен');
      });
  }

  sendOrderMail(dto: OrderMailDto) {
    console.log(dto);
    this.mailerService
      .sendMail({
        to: 'ПЧШ <krauchukvlad@gmail.com>',
        from: dto.email,
        subject: 'Заказ',
        text: 'Заказ',
        html: orderMail(dto),
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        throw Error('Заказ не отправлен');
      });
  }
}
